import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const App = () => {
  return (
    <>
      <AuthState>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AdMKNtjQ9AL4UQ-YwEzkncgmvJNWTEe_uig8qDARwOrQoab_BZeaAIHnt1YWJYMvRWWR8ZD3yId5upG3",
          }}
        >
          <ProductState>
            <AppRouter />
          </ProductState>
        </PayPalScriptProvider>
      </AuthState>
    </>
  );
};

export default App;
