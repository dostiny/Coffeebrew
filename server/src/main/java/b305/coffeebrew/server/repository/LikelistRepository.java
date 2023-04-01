package b305.coffeebrew.server.repository;

import b305.coffeebrew.server.entity.Likelist;
import b305.coffeebrew.server.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface LikelistRepository extends JpaRepository<Likelist, Long> {

    Likelist findByItemTypeAndMemberAndItemIdx(String itemType, Member member, Long itemIdx);

    @Query("SELECT l FROM Likelist l WHERE l.itemType = :itemType AND l.member.idx = :memberIdx AND l.expired = false ORDER BY l.updatedDate DESC")
    List<Likelist> findTop10ByItemTypeAndMemberIdxOrderByUpdatedDateDesc(@Param("itemType") String itemType, @Param("memberIdx") Long memberIdx);

}
