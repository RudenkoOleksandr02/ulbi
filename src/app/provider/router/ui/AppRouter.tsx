import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    return <Suspense fallback={<div>loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => {
                return <Route
                    path={path}
                    element={(
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    )}
                    key={path}
                />
            })}
        </Routes>
    </Suspense>
}

export default AppRouter
