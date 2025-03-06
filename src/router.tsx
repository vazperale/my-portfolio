import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import SkillsView from './views/SkillsView';
import ExperienceView from './views/ExperienceView';
import HomeView from './views/HomeView';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<HomeView />} />
                    <Route path='/experience' element={<ExperienceView />} />
                    <Route path='/skills' element={<SkillsView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}