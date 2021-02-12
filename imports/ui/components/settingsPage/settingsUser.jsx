import React, {useState} from 'react'
import styled from 'styled-components'
import {Meteor} from 'meteor/meteor'
import {FormChangePassword} from '../forms/changePassword'

export const SettingsInfoUser = ()=> {
    const userdata = Meteor.user()
    const [user,setUser] = useState(userdata.profile)

    const Data = ["France", "Belgique", "Suisse"]
    const Relation = ["...","en couple","Compliqué","avec ma licorne", "En attente d'un miracle"]

    const handleChange= (e) => {
        const name= e.target.name;
        const value = e.target.value;
        setUser((prev) => ({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        Meteor.users.update(
            {_id: userdata._id}, 
            {$set:
                {
                    profile:user
                }
            },function(err, result){
                console.log(err, result)
            })
    }
    const MakeItem = (X)=> {
        var select = false
        if(user.Relationships == X || user.contry === X){
            select = true
        }
        return <option key={X} value={X} selected={select}>{X}</option>;
    }
    return(
    <Corps>
        <Settingdiv>

        </Settingdiv>
        <Settingdiv>
            <SettingForm onSubmit={handleSubmit}>
                <h3>Profile utilisateur : {userdata.username}</h3>
                <label htmlFor="inputprofilename">Profile name</label>
                <input id="inputprofilename" type="text" name="profilename" placeholder="Full Name" onChange={handleChange} value={user.profilename}/>

                <label htmlFor="inputtagline">TagLine</label>
                <input id="inputtagline" type="text" name="tagline" placeholder="TagLine" onChange={handleChange} value={user.tagline}/>

                <label htmlFor="inputnaissance">Date de naissance</label>
                <input id="inputnaissance" type="date" name={"naissance"} placeholder="Date de naissance" onChange={handleChange} value={user.naissance}/>

                <label htmlFor="inputbio">Bio</label>
                <textarea id="inputbio" type="text" name="bio" onChange={handleChange} value={user.bio}></textarea>

                <label htmlFor="inputcontry">Pays</label>
                <select onChange={handleChange} name="contry" id="inputcontry">{Data.map(MakeItem)}</select>

                <label htmlFor="inputRelation">Relation</label>
                <select onChange={handleChange} name="Relationships" id="inputRelation">{Relation.map(MakeItem)}</select>

                <input type="submit" value="Enregistrer" />
            </SettingForm>
        </Settingdiv>
        <Settingdiv>
            <h3>Change Password</h3>
            <FormChangePassword />
        </Settingdiv>
        <Settingdiv>
            <h3>interests</h3>
            <SettingForm onSubmit={handleSubmit}>
                <label htmlFor="inputfavoriteTV">Favourite TV Shows</label>
                <textarea id="inputfavoriteTV" type="text" name="favoritetvshows" onChange={handleChange} value={user.favoritetvshows}></textarea>

                <label htmlFor="inputFavouriteMusicBands">Favourite Music Bands / Artists</label>
                <textarea id="inputFavouriteMusicBands" type="text" name="favouritemusicbands" onChange={handleChange} value={user.favouritemusicbands}></textarea>

                <label htmlFor="inputFavouriteMovies">Favourite Movies</label>
                <textarea id="inputFavouriteMovies" type="text" name="favouritemovies" onChange={handleChange} value={user.favouritemovies}></textarea>

                <label htmlFor="inputfavouritebooks">Favourite Books</label>
                <textarea id="inputfavouritebooks" type="text" name="favouritebooks" onChange={handleChange} value={user.favouritebooks}></textarea>

                <label htmlFor="inputfavouritegames">Favourite Games</label>
                <textarea id="inputfavouritegames" type="text" name="favouritegames" onChange={handleChange} value={user.favouritegames}></textarea>

                <label htmlFor="inputmyhobbies">My Hobbies</label>
                <textarea id="inputmyhobbies" type="text" name="myhobbies" onChange={handleChange} value={user.myhobbies}></textarea>

                <input type="submit" value="Enregistrer" />
            </SettingForm>
        </Settingdiv>
        <Settingdiv>
            
        </Settingdiv>
    </Corps>
    )
}

const Corps = styled.div`
    margin-bottom: 70px;
`
const Settingdiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
    padding:20px;
    border-radius:10px;
    box-shadow: 5px 5px 10px #00000040;
    h3{
        color : #3e3f5e;
        margin-bottom:20px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1em;
    }`
const SettingForm = styled.form`
    display:flex;
    flex-direction:column;
    label{
        font-size: 12px;
        font-weight:600;
        color: #adafca;
    }
    textarea, input, select{
        outline:none;
        font-weight:900;
        border:1px solid #dedeea;
        border-radius:10px;
        margin-bottom:5px;
        padding:10px;
    }
    input[type="submit"]{
        background-color:#28a745;
        color:white;
        font-size:1.1rem;
        margin:10px 0;
    }
    textarea{
        height:80px;
    }
`