import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { appRouter } from './appRouter.tsx';
import { Loader } from '@/shared/ui/loader';

import '@/shared/styles/appEntry.css';
import { appStore } from '@/app/appStore.ts';
import { MetamaskListeners } from '@/widgets/metamaskListeners/ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense
            fallback={
                <Loader containerStyle={{ height: '100dvh' }} iconStyle={{ fontSize: '50px' }} />
            }
        >
            <Provider store={appStore}>
                <RouterProvider router={appRouter()} />
                <MetamaskListeners />
            </Provider>
        </Suspense>
    </React.StrictMode>,
);
