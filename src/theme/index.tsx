import { ConfigProvider } from "antd";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const primaryColorCode = "#000";
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColorCode,
          colorTextBase: "#000",
          colorText: "#000",
          colorTextLightSolid: "#000",
        },
        components: {
          Button: {
            colorPrimary: primaryColorCode,
            colorTextBase: "#000",
            colorText: "#000",
            colorTextLightSolid: "#000",
          },
          Input: {
            colorTextBase: "#000",
            colorText: "#000",
            colorTextLightSolid: "#000",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
export default ThemeProvider;
