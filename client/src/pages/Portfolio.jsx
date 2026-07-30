import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPortfolio } from "../services/portfolioService";

import DeveloperTemplate from "../templates/DeveloperTemplate";

function Portfolio() {
  const { username } = useParams();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPortfolio();
  }, [username]);

  async function loadPortfolio() {
    try {
      setLoading(true);
      setError("");

      const data = await getPortfolio(username);

      if (data.success && data.portfolio) {
        setPortfolio(data.portfolio);
      } else {
        setError("Portfolio not found.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load portfolio.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold animate-pulse">
          Loading Portfolio...
        </h2>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-3">
          Portfolio Not Found
        </h1>

        <p className="text-gray-600 text-center">
          The portfolio you are looking for doesn't exist or may have been
          removed.
        </p>
      </div>
    );
  }

  return <DeveloperTemplate portfolio={portfolio} />;
}

export default Portfolio;