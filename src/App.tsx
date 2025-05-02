import { Button, Input } from "antd";
import ThemeProvider from "./theme";

function App() {
  return (
    <ThemeProvider>
      <div className="p-5 bg-gray-300 font-bold flex flex-col gap-5 w-max">
        <h1>App Component In HomePage</h1>
        <Button type="primary">Button</Button>
        <Button type="default">Button</Button>
        <Button>Default Button</Button>

        <Input placeholder="Basic usage" />
        <Input placeholder="Disabled" disabled />
      </div>
    </ThemeProvider>
  );
}
export default App;
