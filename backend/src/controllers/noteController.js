export function getAllNotes(req, res) {
    res.status(200).json({ message: 'Notes retrieved Successfully' });
}

export function createNote(req, res) {
    res.status(201).json({ message: 'Note created Successfully' });
}

export function updateNote(req, res) {
    res.status(200).json({ message: 'Note updated Successfully' });
}

export function deleteNote(req, res) {
    res.status(200).json({ message: 'Note deleted Successfully' });
}

export function getNoteById(req, res) {
    res.status(200).json({ message: 'Note retrieved Successfully' });
}

