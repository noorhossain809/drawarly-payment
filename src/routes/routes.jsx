import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/pages/Home';
import SignUp from '../components/pages/SignUp';
import ProfilePage from '../components/pages/ProfilePage';
import GeneralElectricity from '../components/pages/GeneralElectricity';
import Electricity from '../components/pages/Electricity';
import Verification from '../components/pages/Verification';
import VerificationOTP from '../components/pages/VerificationOtp';
import Verifying from '../components/pages/Verifying';
import Success from '../components/pages/Success';
import SubscriptionPlan from '../components/pages/SubscriptionPlan';
import PaymentMethod from '../components/pages/PaymentMethod';
import PaymentSuccess from '../components/pages/PaymentSuccess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // This wraps the entire layout (Navbar and Footer)
    children: [
      {
        path: '/',
        element: <Home />, // Home is the default component
      },
      {
        path: '/signUP',
        element:<SignUp></SignUp>, // Home is the default component
      },
      {
        path: '/verification',
        element:<Verification></Verification>, // Home is the default component
      },
      {
        path: '/verificationOtp',
        element:<VerificationOTP></VerificationOTP>, // Home is the default component
      },
      {
        path: '/verifying',
        element:<Verifying></Verifying>, // Home is the default component
      },
      {
        path: '/success',
        element:<Success></Success>, // Home is the default component
      },
      {
        path: '/profilePage',
        element:<ProfilePage></ProfilePage>, // Home is the default component
      },
      {
        path: '/generalElectricity',
        element:<GeneralElectricity></GeneralElectricity>, // Home is the default component
      },
      {
        path: '/electricity',
        element:<Electricity></Electricity>, // Home is the default component
      },
      {
        path: '/subscriptionPlan',
        element:<SubscriptionPlan></SubscriptionPlan>, // Home is the default component
      },
      {
        path: '/paymentMethod',
        element:<PaymentMethod></PaymentMethod>, // Home is the default component
      },
      {
        path: '/paymentSuccess',
        element:<PaymentSuccess></PaymentSuccess>, // Home is the default component
      },
    ],
  },
]);

export default router;
