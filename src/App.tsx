import { DateTimePicker } from '@mui/x-date-pickers';
import './App.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import React from 'react';
import RoomsData from './rooms';
import { Room } from './rooms';


type PeopleType = {
  [key: string]: {
    min: number,
    max: number,
  }
};

const PEOPLE: PeopleType = {
  "2-6": {
    min: 2,
    max: 6,
  },
  "4-10": {
    min: 4,
    max: 10,
  },
  "6-10": {
    min: 6,
    max: 10,
  },
  "8-12": {
    min: 8,
    max: 12,
  },
  "12-18": {
    min: 12,
    max: 18,
  },
}

function RoomCard({ room, date }: { room: Room, date: dayjs.Dayjs | null }) {
  return (
    <>
      <Card sx={{ maxWidth: "100%", marginTop: 4, padding: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={room.cardImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {room.name} ({`${room.people.min} - ${room.people.max}`})
            </Typography>
            {/* Lista de descripciones aquí */}
            <Typography variant="body1" component="div">
              <strong>Price:</strong> $200
            </Typography>
            <Typography variant="body1" component="div">
              <strong>Time:</strong> {room.time.min} - {room.time.max} hrs
            </Typography>
            <Typography variant="body1" component="div">
              <strong>Date:</strong> {date?.format("dddd DD/MM/YYYY")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

function App() {
  const [peoplKey, setPeopleKey] = useState("2-6");
  const [time, setTime] = useState(2);
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));

  const [rooms, setRooms] = useState<Room[]>([]);

  const search = () => {
    const people = PEOPLE[peoplKey];
    let rooms: Room[] = [];
    rooms = RoomsData.filter(r => people.min >= r.people.min && people.max <= r.people.max);
    rooms = RoomsData.filter(r => time >= r.time.min && time <= r.time.max);
    console.log(rooms);

    setRooms(rooms);
  }


  return (
    <Container component={"main"} maxWidth="md" sx={{ mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <h2>Reservation</h2>
        <FormControl sx={{ marginTop: 1, marginBottom: 1, marginRight: 1, minWidth: 200 }}>
          <InputLabel id="number-of-people-label">Number of People</InputLabel>
          <Select
            onChange={(e) => { setPeopleKey(e.target.value as string) }}
            value={peoplKey}
            labelId='number-of-people-label'>
            <MenuItem value="2-6">2 - 6</MenuItem>
            <MenuItem value="4-10">4 - 10</MenuItem>
            <MenuItem value="6-10">6 - 10</MenuItem>
            <MenuItem value="8-12">8 - 12</MenuItem>
            <MenuItem value="12-18">12 - 18</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ marginTop: 1, marginBottom: 1, minWidth: 200 }}>
          <InputLabel id="number-of-people-label">Time</InputLabel>
          <Select
            onChange={(e) => { setTime(e.target.value as number) }}
            value={time}
            labelId='number-of-people-label'>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker label="Date" defaultValue={date} onChange={(d) => { setDate(d) }}></DateTimePicker>
        </DemoContainer>
        <Button sx={{ marginTop: 2 }} variant='contained' onClick={search}>
          Search
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ marginTop: 3 }}>
        {rooms.map((r) => <RoomCard room={r} key={r.name} date={date}></RoomCard>)}
      </ Paper>
    </Container>
  );
}

export default App;
