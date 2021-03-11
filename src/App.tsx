import Box from './components/Box/Box';
import Grid from './components/Grid/Grid';
import GridRuler from './components/GridRuler/GridRuler';

function App() {
  return (
    <div className="App" style={{ margin: '16px', position: 'relative' }}>
      <GridRuler spacing="sm"></GridRuler>
      <Grid container spacing="sm">
        <Grid item cols={6}>
          <Box>Box 1</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>Box 2</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>Box 3</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>Box 4</Box>
        </Grid>
        <Grid item cols={6}>
          <Box>Box 5</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
