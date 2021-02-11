import React, {useState} from 'react'
import styled from 'styled-components'
import {Meteor} from 'meteor/meteor'

export const SettingsInfoUser = ()=> {
    const userdata = Meteor.user()
    const [user,setUser] = useState(userdata.profile)

    const Data = ["France", "Belgique", "Suisse"]

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
        return <option key={X}>{X}</option>;
    }
    return(
    <>
        <Settingdiv>

        </Settingdiv>
        <Settingdiv>
            <SettingForm onSubmit={handleSubmit}>
                <h3>Profile utilisateur : {userdata.username}</h3>
                <input type="text" name="profilename" placeholder="Full Name" onChange={handleChange} value={user.profilename}/>
                <input type="text" name="tagline" placeholder="TagLine" onChange={handleChange} value={user.tagline}/>
                <input type="date" name={"naissance"} defaultValue="1990-01-01" placeholder="Date de naissance" onChange={handleChange} value={user.naissance}/>
                <textarea type="text" name="bio" defaultValue={user.bio || "Bio"} onChange={handleChange} value={user.bio}></textarea>
                <select>{Data.map(MakeItem)}</select>
                <input type="submit" value="Enregistrer" />
            </SettingForm>
        </Settingdiv>
        
    </>
    )
}
const Settingdiv = styled.form`
    display:flex;
    flex-direction:column;
    margin-bottom:15px;
    `
const SettingForm = styled.form`
    border-radius:10px;
    box-shadow: 5px 5px 10px #00000040;
    padding:20px;
    display:flex;
    flex-direction:column;
    h3{
        color: #3e3f5e;
        margin-bottom:20px;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1em;
    }
    textarea, input, select{
        outline:none;
        font-weight:900;
        padding:10px;
        border:1px solid #dedeea;
        border-radius:10px;
        margin-bottom:20px;
        
    }
    textarea{
        height:80px;
    }
`
const FlexZone = styled.div`
    display: flex;
    justify-content: space-between;
    input{
        width: 80%;
    }
`
const Avatar = styled.img`
    width:70px;
    border-radius:40px;
`