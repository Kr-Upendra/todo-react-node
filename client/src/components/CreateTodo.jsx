export default function CreateTodo() {
  return (
    <form>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="description" placeholder="Description" />
      <button type="submit">Create</button>
    </form>
  );
}
