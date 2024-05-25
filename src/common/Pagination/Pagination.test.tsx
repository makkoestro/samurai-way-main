import {create} from "react-test-renderer";
import ProfileStatus from "components/Profile/ProfileInfo/ProfileStatus";
import React from "react";
import {Pagination} from "common/Pagination/Paginator";

export let a = 0
describe('Pagination component tests', () => {
    it('pages count is 10, but should be displayed only 10', () => {
        const component = create(<Pagination portionSize={10} totalCount={11} pageSize={1} Page={1} onPageChanged={() => {}}/>);
        const instance = component.root.findByType(Pagination)
        const spans = instance.findAllByType('span')
        expect(spans.length).toBe(10)
    });
    it('if page count is more than 10, button next should appear', () => {
        const component = create(<Pagination portionSize={10} totalCount={11} pageSize={1} Page={1} onPageChanged={() => {}}/>);
        const root = component.root
        const button = root.findByType('button')
        expect(button).toBeDefined()
    });
});