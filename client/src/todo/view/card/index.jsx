import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTodo } from "services/rest-api/todos";

import PropTypes from "prop-types";

import _styles from "./_styles.module.css";

function Card({ instance }) {
  const { id, title, is_complete } = instance || {};

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const onDelete = () => {
    mutate(id);
  };

  if (isPending) return <>Loading</>;

  return (
    <div className={_styles.container}>
      <p className={_styles.text}>
        {title} {is_complete}
      </p>
      <button className={_styles.btn__delete} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

Card.propTypes = {
  instance: PropTypes.object,
};

Card.defaultProps = {
  instance: {},
};

export default Card;
