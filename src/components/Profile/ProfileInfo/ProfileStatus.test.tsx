import {create} from "react-test-renderer";
import React from "react";
import ProfileStatus from "components/Profile/ProfileInfo/ProfileStatus";

export let a = 0
describe('ProfileStatus component', () => {
    test('profile status should be in state', () => {
        const component = create(<ProfileStatus status={'Zdarova Vaitishniki!'}/>);
        const instance = component.root.findByType(ProfileStatus).instance;
        expect(instance.state.status).toBe('Zdarova Vaitishniki!')
    });
    test('span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status={'Zdarova Vaitishniki!'}/>);
        const root = component.root
        const profileStatus = root.findByType(ProfileStatus);
        const span = profileStatus.findByType('span');
        expect(span).toBeDefined();
        expect(span.props.children).toBe('Zdarova Vaitishniki!');
    });
    test("input shouldn't be displayed with correct status", () => {
        const component = create(<ProfileStatus status={'Zdarova Vaitishniki!'}/>);
        const root = component.root
        const profileStatus = root.findByType(ProfileStatus);
        expect(() => {
            const input = profileStatus.findByType('input')
        }).toThrow()
    });
    test("input should be displayed after doubleclick", () => {
        const component = create(<ProfileStatus status={'Zdarova Vaitishniki!'}/>);
        const root = component.root
        const span = root.findByType('span');
        expect(span.props.onDoubleClick())
        const input = root.findByType('input');
        expect(input).toBeDefined()
        expect(input.props.value).toBe('Zdarova Vaitishniki!')
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'Zdarova Vaitishniki!'} updStatus={mockCallback}/>);
        const instance = component.root.findByType(ProfileStatus).instance;
        instance.setDeactivateMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});