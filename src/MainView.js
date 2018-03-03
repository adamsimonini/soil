class MainView extends React.Component {
    constructor(props) {
      super(props);
      this.profileClick = this.profileClick.bind(this);
      this.chartClick = this.chartClick.bind(this);
      this.insuranceClick = this.insuranceClick.bind(this);
      this.state = {selected: 0};
    }
  
    profileClick() {
      this.setState({selected: 0});
    }
  
    chartClick() {
      this.setState({selected: 1});
    }

    insuranceClick() {
        this.setState({selected: 2});
      }
  
    render() {
      const selected = this.state.selected;
  
      if (selected == 0) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else if (selected == 1){
        button = <LoginButton onClick={this.handleLoginClick} />;
      } else if (selected == 2){
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
  );