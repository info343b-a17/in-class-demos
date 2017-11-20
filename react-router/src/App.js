import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import './App.css';

const BLOG_POSTS = { //model for demoing
  '2017-11-20':"Still no sleep...",
  '2017-11-05':"Today I did not get any sleep either",
  '2017-11-04':"Today I did not get any sleep",
  '2017-10-31':"Today is halloween!",
};

class App extends Component {
  render() {

    let postLinks = Object.keys(BLOG_POSTS).map((date) => {
      return (
      <li key={date}>
        <Link to={'/blog/posts/'+date} className="nav-link">{date}</Link>
      </li>
      )
    });

    let renderWelcomeCallback = (routerProps) => {
      return <WelcomePage {...routerProps} greetee="Class" />
        // match={routerProps.match}
        // history={routerProps.history}       
    };

    return (
      <BrowserRouter>
        <div className="container">
          <h1>My Blog</h1>
          <nav>
            <ul className="nav">
              <li>
                <NavLink exact to='/' className="nav-link" activeClassName='activeLink'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about' className="nav-link" activeClassName='activeLink'>About</NavLink>
              </li>
              <li>
                <NavLink to='/blog' className="nav-link" activeClassName='activeLink'>Blog</NavLink>
              </li>
              {postLinks}
            </ul>
          </nav>

          <Switch>
            <Route exact path='/' render={renderWelcomeCallback} />
            {/* <Route path='/about' component={WelcomePage} /> do this too */}
            <Route path='/about' component={AboutPage} />
            <Route exact path='/blog' component={BlogPostList} />
            <Route path='/blog/posts/:postId' component={BlogPost} />
          </Switch>

          {/* <WelcomePage />
          <AboutPage />
          <BlogPostList /> */}
        </div>
      </BrowserRouter>
    );
  }
}


class WelcomePage extends Component {
  render() {
    return (
      <p className="lead"><em>Welcome {this.props.greetee}!</em> to my blog, Where I post micro updates about whatever stuff is of interest to me</p>
    );
  }
}

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet cumque. Quasi esse facilis quisquam recusandae quam deleniti suscipit, libero dolore tenetur dignissimos expedita neque repellendus accusantium mollitia, dicta id.</p>
      </div>
    );
  }
}

class BlogPostList extends Component {
  render() {
    let postItems = Object.keys(BLOG_POSTS).map((date) => {
      return <BlogPost key={date} date={date} />
    })

    return <div>{postItems}</div>
  }
}

class BlogPost extends Component {
  render() {

    console.log(this.props);

    let date = this.props.date || this.props.match.params.postId;    

    return (
      <div>
        <h2>Post on {date}</h2>
        <p>{BLOG_POSTS[date]}</p>
      </div>
    );
  }
}


export default App;
