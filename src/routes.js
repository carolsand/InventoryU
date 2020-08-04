import { routerActions } from 'react-router-dom';

const userIsAuthenticated = user.req

export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="login" component={LoginPage} />
      <Route path="logout" component={LogoutPage} />
      <Route path="navbar" component={NavBar} />
  
      <Route path="profilepage" pages={ProfilePage} />
      <Route path="signup" pages={SignupPage} />
      <Route path="inventory" pages={InventoryPage} />
  
      <Route path="about" component={AboutPage} />
      <Route path="create" component={Create} />
      <Route path="rooms" component={Rooms} />
      <Route path="searchbar" component={SearchBar} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );