import { useTheme } from '@/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom'
import SignIn from './SignIn';
import { Button } from './ui/button';
import { useAuthModal } from '@/store/useAuthModal';

const NavigationBar = () => {

 const { theme, setTheme } = useTheme();
 const isDark = theme === "dark";

 const openModal = useAuthModal((state) => state.openModal)

 return (
  <div className="w-full bg-yellow-100 container flex mx-auto h-18 items-center justify-between px-4 overflow-hidden">

   {/* logo */}
   <Link to='/'>
    <img src={isDark ? "pic_01_dark.png" : "pic_01_light.png"}
     className='h-16' />
   </Link>


   <div className='flex flex-row gap-6'>

    {/* Sign in/up button */}
    <Button className="h-6 min-w-[100px] tracking-tight p-4"
     onClick={openModal}>
      SignIn / SignUp
    </Button>

    {/* dark mode - theme */}
    <div className={`flex items-center justify-center cursor-pointer transition-transform duration-500 
   ${isDark ? "rotate-180" : "rotate-0"}`}
     onClick={() => setTheme(isDark ? "light" : "dark")}>
     {isDark ?
      (<Sun className='h-6 w-6 text-yellow-400' />) :
      (<Moon className='h-6 w-6 text-blue-400' />)}
    </div>
   </div>
  </div>
 )
}

export default NavigationBar