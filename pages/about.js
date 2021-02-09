import { Component } from "react";
import { Fetch } from 'isomorphic-unfetch';
import ErrorPage from './_error';
import Layout from '../components/Layout';


export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/lpython");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <ErrorPage statusCode={statusCode}/>
    }
    
    return (
      <Layout title="About">
        <p>
          {user.name}
        </p>
        <img src={user.avatar_url} alt={user.name + " avatar"} height="200px"></img>
      </Layout>
    );
  }
}