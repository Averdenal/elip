import React, {useState} from 'react'
import {Meteor} from 'meteor/meteor'
import { SettingForm,GridCol,FlexDiv } from '../elements/forms'
import MessageFlash from '../elements/flashMessage'


export const UserSettingForm = (props) => {
    const [user,setUser] = useState(props.userdata.profile)
    const [flash, setFlash] =useState({
        active:false,
        message:"",
        error:false
    })

    const Data = ["France", "Belgique", "Suisse"]
    const Relation = ["...","en couple","Compliqué","avec ma licorne", "En attente d'un miracle"]

    const activeFlash=(message, err, delay) => {
        setFlash(()=> ({
            active:true,
            message:message,
            error:err
        }))
        console.log(flash)
        setTimeout(function () {
            setFlash(()=> ({
                active:false,
                message:"",
                error:false
            }))
        }, delay)
    }

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
        Meteor.users.update(
            {_id: props.userdata._id}, 
            {$set:
                {
                    profile:user
                }
            },function(err, result){
                console.log(result)
                if(result != 0){
                    activeFlash("MaJ ok", false, 2000)
                }
            })
    }
    const MakeItem = (X)=> {
        var select = false
        if(user.Relationships == X || user.contry === X){
            select = true
        }
        return <option key={X} value={X} selected={select}>{X}</option>;
    }
    return (
        <SettingForm onSubmit={handleSubmit}>
            {flash.active && <MessageFlash err={flash.error} message={flash.message} />}
            <GridCol col={"1/3"} row={1}>
                <h3>Profile utilisateur : {props.userdata.username}</h3>
            </GridCol>
            
            <GridCol col={1} row={2} margin={"20px"}>
                <FlexDiv>
                    <label htmlFor="inputprofilename">Profile name</label>
                    <input id="inputprofilename" type="text" name="profilename" placeholder="Full Name" onChange={handleChange} value={user.profilename}/>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputbio">Bio</label>
                    <textarea id="inputbio" type="text" name="bio" onChange={handleChange} value={user.bio}></textarea>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputcontry">Pays</label>
                    <select onChange={handleChange} name="contry" id="inputcontry">{Data.map(MakeItem)}</select>
                </FlexDiv>
            </GridCol>
            <GridCol col={2} row={2}>
                <FlexDiv>
                    <label htmlFor="inputtagline">TagLine</label>
                    <input id="inputtagline" type="text" name="tagline" placeholder="TagLine" onChange={handleChange} value={user.tagline}/>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputnaissance">Date de naissance</label>
                    <input id="inputnaissance" type="date" name={"naissance"} placeholder="Date de naissance" onChange={handleChange} value={user.naissance}/>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputRelation">Relation</label>
                    <select onChange={handleChange} name="Relationships" id="inputRelation">{Relation.map(MakeItem)}</select>
                </FlexDiv>
            </GridCol>

            <input type="submit" value="Enregistrer" />
        </SettingForm>
    )
}

export const UserFavoriteForm = (props) => {
    
    const [user,setUser] = useState(props.userdata.profile)
    const [flash, setFlash] =useState({
        active:false,
        message:"",
        error:false
    })

    const activeFlash=(message, err, delay) => {
        setFlash(()=> ({
            active:true,
            message:message,
            error:err
        }))
        console.log(flash)
        setTimeout(function () {
            setFlash(()=> ({
                active:false,
                message:"",
                error:false
            }))
        }, delay)
    }

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
        Meteor.users.update(
            {_id: props.userdata._id}, 
            {$set:
                {
                    profile:user
                }
            },function(err, result){
                console.log(err, result)
                if(result > 0){
                    activeFlash("Favourite Ajouté", false, 2000)
                }
            })
    }
    return (
        <SettingForm onSubmit={handleSubmit}>
            {flash.active && <MessageFlash err={flash.error} message={flash.message} />}
            <GridCol col={1} row={1} margin={"20px"}>
                <FlexDiv>
                    <label htmlFor="inputfavoriteTV">Favourite TV Shows</label>
                    <textarea id="inputfavoriteTV" type="text" name="favoritetvshows" onChange={handleChange} value={user.favoritetvshows}></textarea>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputFavouriteMusicBands">Favourite Music Bands / Artists</label>
                    <textarea id="inputFavouriteMusicBands" type="text" name="favouritemusicbands" onChange={handleChange} value={user.favouritemusicbands}></textarea>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputFavouriteMovies">Favourite Movies</label>
                    <textarea id="inputFavouriteMovies" type="text" name="favouritemovies" onChange={handleChange} value={user.favouritemovies}></textarea>
                </FlexDiv>
            </GridCol>
            <GridCol col={2} row={1}>
                <FlexDiv>
                    <label htmlFor="inputfavouritebooks">Favourite Books</label>
                    <textarea id="inputfavouritebooks" type="text" name="favouritebooks" onChange={handleChange} value={user.favouritebooks}></textarea>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputfavouritegames">Favourite Games</label>
                    <textarea id="inputfavouritegames" type="text" name="favouritegames" onChange={handleChange} value={user.favouritegames}></textarea>
                </FlexDiv>
                <FlexDiv>
                    <label htmlFor="inputmyhobbies">My Hobbies</label>
                    <textarea id="inputmyhobbies" type="text" name="myhobbies" onChange={handleChange} value={user.myhobbies}></textarea>
                </FlexDiv>
            </GridCol>
            <input type="submit" value="Enregistrer" />
        </SettingForm>
    )
}