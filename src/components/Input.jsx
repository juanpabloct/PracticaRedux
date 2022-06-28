function Input({ input, setInput }) {
  return (
    <input
      type="text"
      value={input}
      onChange={(e) => {
        console.log(e.target.value.charCodeAt());
        const inputCharcode = e.target.value.charCodeAt();
        if (inputCharcode >= 48 && inputCharcode <= 57) {
          setInput((currem) => toString(currem) + e.target.value);
        }
      }}
    />
  );
}
export { Input };
