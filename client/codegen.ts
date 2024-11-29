import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: "http://localhost:5050",
  documents: ['src/requests/queries/*.queries.ts', 'src/requetes/mutations/*.mutations.ts'],
  generates: {
    "./src/types/graphql.ts": {
      config: {
        useIndexSignature: true,
        // maybeValue: "T | undefined",
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
export default config;