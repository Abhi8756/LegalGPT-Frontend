  "use client";

  import React, { useState, FormEvent } from 'react';
  import { FileUp, FileText, XCircle, Loader2 } from 'lucide-react';

  // Define the type for a single compliance check
  interface ComplianceCheck {
    Clause: string;
    'Legal Rule': string;
    Reason: string;
    Violates: string;
  }

  // Define the type for the entire compliance data
  interface ComplianceData {
    [key: string]: ComplianceCheck;
  }

  export default function PDFComplianceAnalyzer() {
    const [file, setFile] = useState<File | null>(null);
    const [complianceData, setComplianceData] = useState<ComplianceData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
        setError(null);
      }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      if (!file) {
        setError('Please select a PDF file');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      setIsLoading(true);
      setError(null);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5 * 60 * 1000);

      try {
        const response = await fetch('/api/proxy/route2', {
          method: 'POST',
          body: formData,
        });
        

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setComplianceData(data);
      } catch (err) {
        console.error('Upload error:', err);
        if (err instanceof Error && err.name === 'AbortError') {
          setError('Request timed out after 5 minutes');
        } else {
          setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        }
        setComplianceData(null);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* File Upload Section */}
          <div className="bg-gray-50 p-6 border-b">
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
              <label className="block w-full">
                <input 
                  type="file" 
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </label>
              <button 
                type="submit" 
                disabled={!file || isLoading}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full 
                          hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed 
                          transition-colors duration-300"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <FileUp className="mr-2 h-5 w-5" />
                )}
                {isLoading ? 'Analyzing...' : 'Analyze PDF'}
              </button>
            </form>
            {error && (
              <div className="mt-4 text-red-600 flex items-center">
                <XCircle className="mr-2 h-5 w-5" />
                {error}
              </div>
            )}
          </div>

          {/* Compliance Results Section */}
          {complianceData && (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="mr-3 h-6 w-6 text-blue-600" />
                Compliance Analysis Results
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 text-left">Status</th>
                      <th className="border p-3 text-left">Clause</th>
                      <th className="border p-3 text-left">Legal Rule</th>
                      <th className="border p-3 text-left">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(complianceData).map(([, compliance], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border p-3">
                          <span 
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              compliance.Violates === 'NO' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {compliance.Violates === 'NO' ? 'Compliant' : 'Non-Compliant'}
                          </span>
                        </td>
                        <td className="border p-3">{compliance.Clause}</td>
                        <td className="border p-3">{compliance['Legal Rule']}</td>
                        <td className="border p-3">{compliance.Reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
