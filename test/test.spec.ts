import { hasNestedProperty } from '../src/has-nested-property'

describe('Feature testing', () => {

    // Test object
    const testObject = {
        first_level: {
            some_property: false,
            second_level: {
                third_level: '77 790 000 км'
            }
        }
    }

    // Handle valid result
    it('It works?', () => {
        expect(hasNestedProperty(testObject, 'first_level.second_level.third_level')).toEqual(true);
    });

    // Handle invalid result
    it('Handle error', () => {
        expect(hasNestedProperty(testObject, 'first_level.deep_level')).toEqual(false);
    });
});

