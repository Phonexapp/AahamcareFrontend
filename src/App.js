import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./SignupLogin/Login.js";
import Sign from "./SignupLogin/Signup.js";
import Home from "./Home/Home.js";
import Store from "./Home/Store.js";
import OladAgeHome from "./Home/OldAgeHome.js";
import OldAgeHomeDetail from "./Home/OldAgeHomeDetail.js";
import OrphanAge from "./Home/OrphanAge.js";
import OrphanAgeDetail from "./orphanage/OrphaAgeDetail.js";
import NewNgo from "./Home/NewNgo.js";
import NgoDetailList from "./Newngo/NgoDetailList.js";
import Pet from "./Home/Pet.js";
import PetDetail from "./pet/PetDetail.js";
import Profile from "./userprofile/Profile.js";
import Editprofile from "./EditProfile/Editprofile.js";
import Support from "./support/support.js";
import PasswordReset from "./ResetPassword/PasswordReset.js";
import OldAgeMap from "./Home/OldAgeMap.js";
import OldAgeHomeListView from "./Home/OldAgeHomeListView.js";
import Orphanlist from "./orphanage/orphanlist.js";
import NgoList from "./Newngo/NgoList.js";
import PetList from "./pet/PetList.js";
import Rewsidence from "./Residence/Rewsidence.js";
import Post from "./Post/post.js";
import Event from "./Home/Event.js";
import OLDHOMEPAGE from "./Home/OLDHOMEPAGE.js";
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login/:Data" element={<Login />} />
        <Route path="/Signup" element={<Sign />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/OladAgeHome" element={<OladAgeHome />} />
        <Route path="/OldAgeHomeDetail/:id" element={<OldAgeHomeDetail />} />
        <Route path="/OrphanAge" element={<OrphanAge />} />
        <Route path="/OrphanAge/:id" element={<OrphanAgeDetail />} />
        <Route path="/NewNgo" element={<NewNgo />} />
        <Route path="/NewNgo/:id" element={<NgoDetailList />} />
        <Route path="/Pet" element={<Pet />} />
        <Route path="/Pet/:id" element={<PetDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Editprofile/:Name/:Email/:Phone" element={<Editprofile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/Resetpassword" element={<PasswordReset />} />
        <Route path="/oldagemap" element={<OldAgeMap />} />
        <Route path="/oldagehomelistview" element={<OldAgeHomeListView />} />
        <Route path="/orphanlist" element={<Orphanlist />} />
        <Route path="/ngolist" element={<NgoList />} />
        <Route path="/petlist" element={<PetList />} />
        <Route path="/residence" element={<Rewsidence />} />
        <Route path="/post" element={<Post />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/PostPostPost" element={<OLDHOMEPAGE />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;