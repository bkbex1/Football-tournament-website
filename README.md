# Football Tournament

 Web application that visualizes the matches and results from the European Football Championship.

1. CSV Parsing: The app uses a custom parseCSV function to read CSV files containing teams, players, records, and matches. These files are loaded asynchronously from the project folder.

2. Data Context: React's Context API is used to store and manage global data like teams, players, records, matches, and the different stages of the knockout rounds.

3. Date-Based Match Filtering: Matches are split based on their date, with those before June 26, 2024, treated as group stage matches, and the rest assigned to the knockout rounds.

4. Group Stage Display: The app organizes and shows matches from the group stage, dividing teams into 6 groups (A-F) and automatically sorting and assigning the matches to each group.

5. Knockout Stage: After the group stage is complete, the remaining matches are handled and visualized as the tournament progresses through the knockout rounds.