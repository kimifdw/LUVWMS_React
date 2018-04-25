/**
 * 定义应用路由
 */
import React from 'react';
import {
  Router,
  // browserHistory,
  hashHistory,
} from 'react-router';

// 路由配置规则参考： https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md#configuration-with-plain-routes
// 一下部分是由 ICE 相关工具自动生成的路由，请勿随意改变，否则可能会出现一些异常情况
// <!-- auto generated routes start -->
import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import Dashboard from './pages/Dashboard';
import StorageAreaList from './pages/StorageArea';
import StorageLocationList from './pages/StorageLocation';
import Dictionary from './pages/Dictionary';
import CreateGoods from './pages/CreateGoods';
import GoodsList from './pages/GoodsList';
import InStockList from './pages/InStockList';
import OutStockList from './pages/OutStockList';
import StockList from './pages/StockList';
import OrdersList from './pages/OrdersList';
import Operator from './pages/Operator';
import RoleAssianment from './pages/RoleAssianment';
import Role from './pages/Role';
import BlankLayout from './layouts/BlankLayout';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import NotPermission from './pages/NotPermission';
import Exception from './pages/Exception';
import SessionUtil from './utils/SessionUtil';
const autoGeneratedRoutes = [{
  path: '/login',
  childRoutes: [],
  component: BlankLayout,
  indexRoute: {
    component: Login
  }
},
{
  path: '/notPermission',
  childRoutes: [],
  component: BlankLayout,
  indexRoute: {
    component: NotPermission
  }
},{
  path: '/exception',
  childRoutes: [],
  component: BlankLayout,
  indexRoute: {
    component: Exception
  }
},
{
  path: '/notFound',
  childRoutes: [],
  component: BlankLayout,
  indexRoute: {
    component: NotFound
  }
},
{
  path: '/goods',
  childRoutes: [{
    path: 'list',
    childRoutes: [],
    component: GoodsList
  },{
    path: 'create',
    childRoutes: [],
    component: CreateGoods
  },],
  component: HeaderAsideFooterResponsiveLayout,
  indexRoute: {
    component: Dashboard
  }
},
{
  path: '/inStock',
  childRoutes: [{
    path: 'list',
    childRoutes: [],
    component: InStockList
  }],
  component: HeaderAsideFooterResponsiveLayout,
  indexRoute: {
    component: Dashboard
  }
},
{
  path: '/outStock',
  childRoutes: [{
    path: 'orders',
    childRoutes: [],
    component: OrdersList
  },{
    path: 'list',
    childRoutes: [],
    component: OutStockList
  }],
  component: HeaderAsideFooterResponsiveLayout,
  indexRoute: {
    component: Dashboard
  }
},
{
  path: '/stock',
  childRoutes: [{
    path: 'list',
    childRoutes: [],
    component: StockList
  }],
  component: HeaderAsideFooterResponsiveLayout,
  indexRoute: {
    component: Dashboard
  }
},
{
  path: '/authority',
  childRoutes: [{
    path: 'roleAssianment',
    childRoutes: [],
    component: RoleAssianment
  },{
    path: 'operator',
    childRoutes: [],
    component: Operator
  },{
    path: 'role',
    childRoutes: [],
    component: Role
  }],
  component: HeaderAsideFooterResponsiveLayout,
  indexRoute: {
    component: Dashboard
  }
},
{
  path: '/sys',
  childRoutes: [{
    path: 'StorageArea',
    childRoutes: [],
    component: StorageAreaList
  },
  {
    path: 'StorageLocation',
    childRoutes: [],
    component: StorageLocationList
  },{
    path:'dictionary',
    childRoutes:[],
    component: Dictionary
  }],
  component: HeaderAsideFooterResponsiveLayout,
  indexRoute: {
    component: Dashboard
  }
},
 {
  path: '/',
  childRoutes: [{
    path: '*',
    childRoutes: [],
    component: NotFound
  }],
  component: HeaderAsideFooterResponsiveLayout,
  indexRoute: {
    component: Dashboard
  }
}];
// <!-- auto generated routes end -->

// 自定义路由，如果 path 相同则会覆盖自动生成部分的路由配置
const customRoutes = [
  
];
function checkToken(routes){
  let token = SessionUtil.getToken();
  if(token == null){
    hashHistory.push('/login');
  }
  return [...routes];
}
export default (
  <Router
    history={hashHistory}
    routes={checkToken([...autoGeneratedRoutes, ...customRoutes])}
  />
);