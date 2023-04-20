import * as url from 'url';
import { join as pathJoin } from 'path';
import * as fs from 'fs';
import input from './input'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('..', import.meta.url));

const employeesPath = pathJoin(__dirname, 'employees.txt');

//
export async function getFiles() {
    try {
        const files = await readdir(employeesPath);
        return files.sort();
    } catch (err) {
        if (err.code === 'ENOENT') {
            await mkdir(employeesPath);
            return [];
        } else {
            throw err;
        }
    }
}

export async function getFile(filename) {
    return await readFile(pathJoin(employeesPath, filename), {
        encoding: 'utf8'
    });
}

export async function writeFile(filename, content) {
    await writeFile(pathJoin(employeesPath, `${filename}.txt`), content);
}

export async function deleteFile(filename) {
    await unlink(pathJoin(employeesPath, `${filename}.txt`));
}

export async function reset() {
    try {
        await access(employeesPath, fsConstants.W_OK);
        await Promise.all((await readdir(employeesPath)).map(filename => deleteFile(filename)));
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }
    await mkdir(employeesPath);
}