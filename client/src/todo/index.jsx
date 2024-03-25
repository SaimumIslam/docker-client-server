import _styles from "./_styles.module.css";

import Form from "./form";
import View from "./view";

function Todo() {
  return (
    <main className={_styles.container}>
      <Form />
      <View />
    </main>
  );
}

export default Todo;
