import { Form } from "./components/form";

function App() {
  return (
    <>
      <header>
        <div className="absolute left-0 right-0 top-2 z-40 pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="flex items-center justify-between">
                <span>Logo</span>
                <span>menu</span>
              </div>
            </div>
          </div>
        </div>
      </header>

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
