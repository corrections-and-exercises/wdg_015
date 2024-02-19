function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => console.log(e.target.value)} type="text" />
        <button>Click</button>
      </form>
      <button onClick={() => console.log('clicked')}>Click here</button>
    </>
  );
}

export default Form;
