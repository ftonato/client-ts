import { join } from 'path';
import { generate } from '../codegen/src/codegen';

describe('codegen', () => {
  it('should generate correct TypeScript', async () => {
    const schemaFilePath = join(__dirname, 'mocks', 'schema.json');
    const outputFilePath = 'hahaha';

    const writeFile = jest.fn();
    await generate({ schemaFilePath, outputFilePath, writeFile });

    const [path, content] = writeFile.mock.calls[0];
    expect(path).toEqual(join(process.cwd(), 'hahaha.ts'));
    expect(content).toMatchSnapshot();
  });

  it('should generate correct JavaScript', async () => {
    const schemaFilePath = join(__dirname, 'mocks', 'schema.json');
    const outputFilePath = 'hahaha';

    const writeFile = jest.fn();
    await generate({ schemaFilePath, outputFilePath, writeFile: writeFile, language: 'javascript' });

    const [path, content] = writeFile.mock.calls[0];
    expect(path).toEqual(join(process.cwd(), 'hahaha.js'));
    expect(content).toMatchSnapshot();
  });
});
