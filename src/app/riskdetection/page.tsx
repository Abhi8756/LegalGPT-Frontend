// src/app/riskdetection/page.tsx
"use client";

import { useState } from 'react';

export default function RiskDetection() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError('');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setFileName(droppedFile.name);
      setError('');
    } else {
      setError('Please upload a PDF file');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file');
      return;
    }

    setIsLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://risk-legal.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze the contract');
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          LegalGPT Contract Analyzer
        </h1>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <input
                id="file-upload"
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              
              {fileName ? (
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-gray-700">{fileName}</span>
                </div>
              ) : (
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-500">Drag and drop your PDF contract here, or click to browse</p>
                </div>
              )}
            </div>
            
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
            
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                disabled={isLoading || !file}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  'Analyze Contract'
                )}
              </button>
            </div>
          </form>
        </div>

        {analysis && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Good Clauses Column */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Good Clauses
              </h2>
              
              {analysis.good_clauses && analysis.good_clauses.length > 0 ? (
                <div className="space-y-4">
                  {analysis.good_clauses.map((item: any, index: number) => (
                    <div key={index} className="border border-green-100 bg-green-50 rounded-md p-4">
                      <div className="font-medium text-gray-800 mb-2">{item.clause}</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium text-green-600">Why it's good: </span>
                        {item.reason}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No good clauses identified</p>
              )}
            </div>

            {/* Risk Clauses Column */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Risk Clauses
              </h2>
              
              {analysis.risk_clauses && analysis.risk_clauses.length > 0 ? (
                <div className="space-y-4">
                  {analysis.risk_clauses.map((item: any, index: number) => (
                    <div key={index} className="border border-red-100 bg-red-50 rounded-md p-4">
                      <div className="font-medium text-gray-800 mb-2">{item.clause}</div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium text-red-600">Risk: </span>
                        {item.risk}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No risk clauses identified</p>
              )}
            </div>
          </div>
        )}

        {analysis && analysis.recommendations && analysis.recommendations.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recommendations
            </h2>
            
            <div className="space-y-4">
              {analysis.recommendations.map((item: any, index: number) => (
                <div key={index} className="border border-blue-100 bg-blue-50 rounded-md p-4">
                  <div className="font-medium text-gray-800 mb-2">{item.clause}</div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-medium text-blue-600">Reason: </span>
                    {item.reason}
                  </div>
                  <div className="text-sm bg-white p-3 rounded border border-blue-200">
                    <span className="font-medium text-blue-600">Suggested rewrite: </span>
                    {item.suggested_rewrite}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LegalGPT. All rights reserved.</p>
          <p className="mt-1">AI-powered legal contract analysis</p>
        </div>
      </footer>
    </div>
  );
}
