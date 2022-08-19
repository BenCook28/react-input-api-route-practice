import './App.css';

function App() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('complexSearch?apiKey=26073aef38ae4bb9a8e0a5f932d4c334&includeIngredients' + ingredient, {
        method: 'GET',
        body: JSON.stringify({
          name: 'John Smith',
          job: 'manager',
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div className="App">
      <form>
  <label>
    Enter an ingredient:
    <input type="text" name="ingredient" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;
