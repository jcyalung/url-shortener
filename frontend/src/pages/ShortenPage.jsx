import { useState } from 'react';

const ShortenPage = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            // Placeholder API request
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'URL Shorten Request',
                    body: url,
                    userId: 1,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to shorten URL');
            }

            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-h-screen flex flex-col items-center justify-center bg-white p-4 text-gray-800">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-black">Shorten URL</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="url" className="block text-sm font-medium mb-2">
                            Enter URL to shorten:
                        </label>
                        <input
                            id="url"
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? 'Shortening...' : 'Shorten URL'}
                    </button>
                </form>

                {error && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                        Error: {error}
                    </div>
                )}

                {result && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                        <p className="font-semibold mb-2">Success!</p>
                        <pre className="text-xs overflow-auto">
                            {JSON.stringify(result, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShortenPage;

