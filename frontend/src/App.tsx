import { db, getSettings } from "./firebase";

function App() {
  (async () => {
    const settings = await getSettings(db);

    console.log(settings);
  })();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Autod3sk</h1>
        <h2>Top settings</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            margin: "2px",
          }}
        >
          <label htmlFor="">Height</label>
          <input style={{ height: "60px" }} type="text" name="" id="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            margin: "2px",
          }}
        >
          <label htmlFor="">Time</label>
          <input style={{ height: "60px" }} type="text" name="" id="" />
        </div>

        <h2 style={{ marginTop: "30px" }}>Bottom settings</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            margin: "2px",
          }}
        >
          <label htmlFor="">Height</label>
          <input style={{ height: "60px" }} type="text" name="" id="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            margin: "2px",
          }}
        >
          <label htmlFor="">Time</label>
          <input style={{ height: "60px" }} type="text" name="" id="" />
        </div>

        <button
          style={{ marginTop: "13px", width: "80%", height: "60px" }}
          onClick={() => {
            alert("U clic on me?");
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default App;
