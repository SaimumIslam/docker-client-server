import { useQuery } from "@tanstack/react-query";

import { getTodos } from "services/rest-api/todos";

import _styles from "./_styles.module.css";

import Card from "./card";

function Views() {
  const { data, isFetching } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isFetching) return <>Loading</>;

  const items = (Array.isArray(data) && data) || [];

  return (
    <section className={_styles.container}>
      <h1>Todo Lists</h1>
      {items?.map((item) => (
        <Card key={item?.id} instance={item} />
      ))}
    </section>
  );
}

export default Views;
