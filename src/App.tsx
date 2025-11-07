import { Route, BrowserRouter as Router, Routes } from "react-router";
import { ScrollToTop } from "./components/common/ScrollToTop";
import AppLayout from "./layout/AppLayout";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import VerificationCode from "./pages/AuthPages/VerificationCode";
import Forgotpassword from "./pages/AuthPages/forgotpassword";
import ResetPassword from "./pages/AuthPages/resetPassword";
import BusinessProfile from "./pages/AuthPages/businessProfile";
import SubscriptionPlan from "./pages/AuthPages/subscriptionPlan";
import CampaignManagement from "./pages/campaign";
import ViewCampaign from "./pages/campaign/viewCampaign";
import CreateCampaign from "./pages/campaign/createCampaign";

import Blank from "./pages/Blank";
import Calendar from "./pages/Calendar";
import BarChart from "./pages/Charts/BarChart";
import LineChart from "./pages/Charts/LineChart";
import Home from "./pages/Dashboard/Home";
import FormElements from "./pages/Forms/FormElements";
import NotFound from "./pages/OtherPage/NotFound";
import Unauthorized from "./pages/OtherPage/Unauthorized";
import BasicTables from "./pages/Tables/BasicTables";
import Alerts from "./pages/UiElements/Alerts";
import Avatars from "./pages/UiElements/Avatars";
import Badges from "./pages/UiElements/Badges";
import Buttons from "./pages/UiElements/Buttons";
import Images from "./pages/UiElements/Images";
import Videos from "./pages/UiElements/Videos";
import UserProfiles from "./pages/UserProfiles";
// import ProtectedRoute, { Role } from "./routes/auth-route";
import { JSX } from "react";

import BusinessManagement from "./pages/BusinessManagement";
import BusinessDetails from "./pages/BusinessManagement/businessDetails";

import Events from "./pages/events";

import MyCollaboration from "./pages/myCollaboration";
import CampaignAnalytics from "./pages/campaignAnalytics/indesx";
import Rewards from "./pages/rewards";
import Customer from "./pages/customer";
import ProductListing from "./pages/productListing";
import OrderManagement from "./pages/orderManagement";
import OrderDetails from "./pages/orderManagement/orderDetails";
import AddReward from "./pages/rewards/addReward";
import AddProduct from "./pages/productListing/addProduct";
import AddCustomer from "./pages/customer/addCustomer";


interface RouteConfig {
  path: string;
  element: JSX.Element;
  // roles?: Role[] | "all";
  title?: string;
  activeTab?: string;
}

const routesConfig: RouteConfig[] = [
  // { path: "/signin", element: <Signin /> },
  // { path: "/signup", element: <SignUp /> },
  // { path: "/forgot-password", element: <ForgotPassword /> },
  // { path: "/forgot-password-2", element: <ForgotPassword2 /> },
  // { path: "/forgot-password-3", element: <ForgotPassword3 /> },
  {
    path: "/",
    element: <Home />,
    // roles: "all",
    title: "Dashboard",
    activeTab: "dashboard",
  },
  {
    path: "/profile",
    element: <UserProfiles />,
    // roles: "all",
    title: "profile",
  },
  {
    path: "/business-management",
    element: <BusinessManagement />,
    // roles: "all",
    title: "Business Management"
  },
  {
    path: "/business-management/:id",
    element: <BusinessDetails />,
    // roles: "all",
    title: "Business Management"
  },
  {
    path: "/events",
    element: <Events />,
    // roles: "all",
    title: "Events And Add Event",
  },
  {
    path: "/my-collaboration",
    element: <MyCollaboration />,
    // roles: "all",
    title: "MY COLLABORATION"
  },

  {
    path: "/campaign-management",
    element: <CampaignManagement />,
    // roles: "all",
    title: "Campaign Management"
  },
  {
    path: "/create-campaign",
    element: <CreateCampaign/>,
    // roles: "all",
    title: "Campaign Management"
  },
  {
    path: "/campaign-management/:id",
    element: <ViewCampaign />,
    // roles: "all",
    title: "Campaign Management"
  },
  {
    path: "/analytics",
    element: <CampaignAnalytics/>,
    // roles: "all",
    title: "Analytics"
  },

   {
    path: "/rewards",
    element: <Rewards/>,
    // roles: "all",
    title: "Rewards"
  },
  {
    path: "/add-reward",
    element: <AddReward/>,
    // roles: "all",
    title: "Add Rewards"
  },
   {
    path: "/customer",
    element: <Customer/>,
    // roles: "all",
    title: "Customer"
  },
   {
    path: "/add-customer",
    element: <AddCustomer/>,
    // roles: "all",
    title: "Add Customer"
  },
   {
    path: "/product-listing",
    element: <ProductListing/>,
    // roles: "all",
    title: "Product Listing"
  },
  {
    path: "/add-product",
    element: <AddProduct/>,
    // roles: "all",
    title: "Add Product"
  },

  {
    path: "/order-management",
    element: <OrderManagement/>,
    // roles: "all",
    title: "Order Management"
  },
  {
    path: "/order-management/:id",
    element: <OrderDetails />,
    // roles: "all",
    title: "Campaign Management"
  },

];

export default function App() {
  return (
    <>
      <Router basename="/shopdit-business">
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            {/* {routesConfig?.map(({ path, element, roles }) => ( */}
            {routesConfig?.map(({ path, element }) => (
              <Route
                key={path}
                index={path === "/"}
                path={path}
                // element={
                //   roles ? (
                //     <ProtectedRoute roles={roles}>{element}</ProtectedRoute>
                //   ) : (
                //     element
                //   )
                // }
                element={element}
              />
            ))}
          </Route>

          <Route element={<AppLayout />}>
            {/* Others Page */}

            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/verification-code" element={<VerificationCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/business-profile" element={<BusinessProfile />} />
          <Route path="/subscription-plan" element={<SubscriptionPlan />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </>
  );
}
