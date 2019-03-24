

import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import LeftNav from './components/Nav/LeftNav'
import { NavBar} from './components/Nav/NavBar'

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { Router } from './routers'

const { Content } = Layout;



const App = () => (


      <Layout>
         
              <Router/>
         
      </Layout>
)

export default App;
