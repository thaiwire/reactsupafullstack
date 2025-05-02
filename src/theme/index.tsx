import { ConfigProvider } from "antd";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const primaryColorCode = "#000";
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColorCode,
          controlOutline: 'none',
        },
        components: {
          Button: {
            controlHeight: 45,
            
          },
          Input: {
           controlHeight: 45,
           colorBorder: 'gray',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
export default ThemeProvider;
