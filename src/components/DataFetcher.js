import React from "react";
import useFetchData from "../hooks/useFetchData";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorMessage from "../components/common/ErrorMessage";
import BarChart from "./BarChart";

export default function DataFetcher() {
  const { data, error, loading } = useFetchData(
    "https://django-dev.aakscience.com/candidate_test/fronted"
  );

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage message={error} />;

  return <BarChart labels={data["labels"]} values={data["values"]} />;
}
