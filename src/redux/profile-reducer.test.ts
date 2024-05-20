import {ProfilePageType} from "App";
import profileReducer, {AddPostAC, DeletePostAC} from "redux/profile-reducer";

export let fakeState:ProfilePageType = {
    postsData: [{
        id: 1,
        message: 'lol',
        likesCount: 4
    },
        {
            id: 2,
            message: 'Zdarova',
            likesCount: 7
        },
        {
            id: 3,
            message: '4e kak?',
            likesCount: 1
        },
    ],
    profile: null,
    status: ''
}
it('posts length should be reduced ', () => {
    let action = DeletePostAC(2)
    let result = profileReducer(fakeState, action)

    expect(result.postsData.length).toBe(2)
    expect(result.postsData[1].id).toBe(3)
});
it('new post should be added ', () => {
    const action = AddPostAC('new post')
    const result = profileReducer(fakeState, action)
    expect(result.postsData.length).toBe(4)
    expect(result.postsData[3].id).toBe(4)
});