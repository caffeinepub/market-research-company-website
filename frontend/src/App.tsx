import { createRouter, RouterProvider } from '@tanstack/react-router';
import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ResearchMethodologies from './pages/ResearchMethodologies';
import ResearchTypes from './pages/ResearchTypes';
import MarketAnalysis from './pages/MarketAnalysis';
import Contact from './pages/Contact';

const rootRoute = createRootRoute({
    component: () => (
        <Layout>
            <Outlet />
        </Layout>
    ),
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const servicesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/services',
    component: Services,
});

const serviceDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/services/$serviceId',
    component: ServiceDetail,
});

const researchMethodologiesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/research-methodologies',
    component: ResearchMethodologies,
});

const researchTypesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/research-types',
    component: ResearchTypes,
});

const marketAnalysisRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/market-analysis',
    component: MarketAnalysis,
});

const contactRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contact',
    component: Contact,
});

const routeTree = rootRoute.addChildren([
    homeRoute,
    servicesRoute,
    serviceDetailRoute,
    researchMethodologiesRoute,
    researchTypesRoute,
    marketAnalysisRoute,
    contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export default function App() {
    return <RouterProvider router={router} />;
}
