function LoadingOrError({ isLoading, isError, error }) {
  if (isLoading) {
    return <div className="loading-data">Loading...</div>;
  }
  if (isError) {
    return (
      <div className="error-data">Error fetching data: {error?.message || "Unknown error"}</div>
    );
  }
  return null;
}

export default LoadingOrError;
