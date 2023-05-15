import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import { filterNotes } from "./graphql/queries";
import { paramFilterNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes ]= useState([]);

  useEffect(() => {
    fetchNotes();
    searchNotes();
  }, []);

  async function searchNotes(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const formData = {
      name: form.get("searchme"),
    };
    const apiData = await API.graphql({
      query: paramFilterNotes,
      variables: { name: formData.name },
    });
    const notesFromAPI = apiData.data.listNotes.items
    console.log(notesFromAPI.listNotes);
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
      })
    );
    setFilteredNotes(notesFromAPI);
  }
  async function fetchNotes() {
    const apiData = await API.graphql({
      query: listNotes,
      variables: { limit: 1000 },
      /*    filter: {
        name: {
            contains: "AAA Note"
        }
    }*/
    });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
      externalid: form.get("externalid"),
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="externalid"
            placeholder="External Reference"
            label="External Label"
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>

        </Flex>
      </View>
      <View as="form" margin="3rem 0" onSubmit={searchNotes}>
        <Flex direction="row" justifyContent="center">
        <TextField
            name="searchme"
            placeholder="Search By"
            label="Search For"
            variation="quiet"
          />
          <Button type="submit" variation="primary">
            SEARCH
          </Button>
        </Flex>
    </View>
    <View>
    <Heading level={2}>Filtered Notes</Heading>
      <View margin="3rem 0">
        {filteredNotes.map((note) => (          
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="strong" fontWeight={700}>
              {note.externalid}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${filteredNotes.name}`}
                style={{ width: 400 }}
              />
            )}
          </Flex>
        ))}
      </View>
      <Heading level={2}>All Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="strong" fontWeight={700}>
              {note.externalid}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${notes.name}`}
                style={{ width: 400 }}
              />
            )}
          </Flex>
        ))}
      </View>
      
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);
