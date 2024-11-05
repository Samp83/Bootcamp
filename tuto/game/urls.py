from ninja import NinjaAPI, ModelSchema, Schema
from game.models import Game, Player


api=NinjaAPI()
class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = [
            "id",
            "name",
            "turn",
            "ended"
        ]

class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = ["id", "name", "score", "game"]

class AddPlayerSchema(Schema):
    game_name: str
    players: list[str]

@api.post("/create_game", response=GameSchema)
def add(request, add_player: AddPlayerSchema):
    player=Player.objects.create(
        player_name=add_player.player_name)
    
    for game in add_player.game:
        Game.objects.create(
            game_name=game,
            player=player,
        )
    return player

@api.get("/player/{player_id}", response=PlayerSchema)
def get(request, player_id: int):
    return Player.objects.get(pk=player_id)