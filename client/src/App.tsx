import { Form } from "./components/form";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div className="relative flex flex-auto bg-white pt-14">
        <div className="relative isolate flex w-full flex-col pt-9">
          <main className="w-full flex-auto">
            <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
              <Form />
            </div>
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
}

export default App;
