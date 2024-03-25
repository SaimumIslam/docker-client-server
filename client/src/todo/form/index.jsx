import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postTodo } from "services/rest-api/todos";

import _styles from "./_styles.module.css";

function Form() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const onSubmit = (event) => {
    event.preventDefault();

    const formValues = {};
    const inputFields = event.target.childNodes;
    for (let idx = 0; idx < inputFields.length - 1; idx++) {
      formValues[inputFields[idx].name] = inputFields[idx].value;
    }

    mutate(formValues);
  };

  if (isPending) return <>Loading</>;

  return (
    <form className={_styles.container} onSubmit={onSubmit}>
      <input name="title" placeholder="Title" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Form;
