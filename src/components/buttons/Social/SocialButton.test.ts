import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('SocialButton', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'SocialButton')).toBe(true);
  });
});
