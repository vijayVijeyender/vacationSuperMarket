import { defineConfig } from "vitest/dist/config";

export default defineConfig({
    test:{
        globals:true,
        environment:'jsdom',
        setupFiles: 'setupTests.ts',
        coverage:{
            provider:'istanbul',
            reporter:['lcov','text','html']
        },
    },
});